"""Generate a selectable, single-column Helvetica PDF from data/content.ts.
Run: node scripts/export-content.cjs | python3 scripts/generate-resume.py
Uses ASCII punctuation deliberately to avoid font-specific extraction glyphs.
"""
import json, sys, textwrap, unicodedata
from pathlib import Path
c = json.load(sys.stdin)
lines = []
def clean(s):
    for a,b in [('—','-'),('–','-'),('’',"'"),('‘',"'"),('“','"'),('”','"'),('·','|'),('→','to'),('×','x')]: s=s.replace(a,b)
    return unicodedata.normalize('NFKD',s).encode('ascii','ignore').decode()
def add(text, size=10, bold=False, space=1):
    # Conservative width for Helvetica; single column with 54pt margins.
    for part in textwrap.wrap(clean(text), width=92 if size==10 else (80 if size==11 else 65), break_long_words=False):
        lines.append((part,size,bold,space))
def heading(t):
    lines.append(('',10,False,9)); add(t.upper(),11,True,7)
add(c['name'],20,True,8)
add(' | '.join(c['roles']),10,True)
add(f"{c['location']} | {c['phone']} | {c['email']}")
add(c['github']); add(c['linkedin']); add(c['url'])
heading('Summary')
for paragraph in c['summary']: add(paragraph)
heading('Skills')
for g in c['skills']: add(g['title']+': '+', '.join(g['items']))
heading('Experience')
for e in c['experience']:
    add(e['title'],11,True); add(e['organization']+' | '+e['location']+' | '+e['dates'])
    for b in e['bullets']: add('- '+b)
    lines.append(('',10,False,5))
heading('Projects')
for e in c['projects']:
    add(e['title'],11,True)
    for b in e['bullets']: add('- '+b)
    add('Stack: '+', '.join(e['tags']))
heading('Research & Publications')
for e in c['research']:
    add(e['title'],11,True); add(e['dates']+' | '+e['organization'])
    for b in e['bullets']: add('- '+b)
heading('Education')
e=c['education'];add(e['title'],11,True);add(e['organization']+' | '+e['location']+' | '+e['dates'])
for b in e['bullets']: add('- '+b)
heading('Certifications')
for e in c['certifications']:add(e['year']+' | '+e['title']+' | '+e['organization'])
heading('Achievements & Leadership')
for e in c['achievements']:add(e['year']+' | '+e['title']+': '+e['detail'])
heading('Contact'); add(c['email']+' | '+c['phone']);add(c['languages'])
# Standard Type1 Helvetica uses only ASCII; no images, tables, or columns.
pages=[]; commands=[]; y=788
for text,size,bold,space in lines:
    step=size*1.25+space
    if y-step<48:
        pages.append('\n'.join(commands));commands=[];y=788
    if text:
        escaped=text.replace('\\','\\\\').replace('(','\\(').replace(')','\\)')
        commands.append(f'BT /F{2 if bold else 1} {size} Tf 54 {y:.2f} Td ({escaped}) Tj ET')
    y-=step
if commands:pages.append('\n'.join(commands))
objects=[b'<< /Type /Catalog /Pages 2 0 R >>',b'',b'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>',b'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>']
page_ids=[]
for stream in pages:
    page_id=len(objects)+1;stream_id=page_id+1;page_ids.append(page_id)
    objects.append(f'<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents {stream_id} 0 R >>'.encode())
    b=stream.encode('ascii');objects.append(f'<< /Length {len(b)} >>\nstream\n'.encode()+b+b'\nendstream')
objects[1]=f'<< /Type /Pages /Count {len(page_ids)} /Kids [{" ".join(str(i)+" 0 R" for i in page_ids)}] >>'.encode()
pdf=bytearray(b'%PDF-1.4\n');offsets=[0]
for i,obj in enumerate(objects,1):offsets.append(len(pdf));pdf+=f'{i} 0 obj\n'.encode()+obj+b'\nendobj\n'
xref=len(pdf);pdf+=f'xref\n0 {len(objects)+1}\n0000000000 65535 f \n'.encode()
for o in offsets[1:]:pdf+=f'{o:010d} 00000 n \n'.encode()
pdf+=f'trailer\n<< /Size {len(objects)+1} /Root 1 0 R >>\nstartxref\n{xref}\n%%EOF\n'.encode()
Path('public/resume.pdf').write_bytes(pdf)
print(f'Generated public/resume.pdf: {len(pages)} pages, {len(pdf)} bytes',file=sys.stderr)
