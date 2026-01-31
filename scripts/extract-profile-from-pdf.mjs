import fs from 'node:fs'
import path from 'node:path'
import { PDFParse } from 'pdf-parse'

const root = path.resolve(process.cwd())
const pdfPath = path.join(root, 'archivos', 'CV_Jeampierre_Pacori_Condori.pdf')
const profilePath = path.join(root, 'src', 'data', 'profile.json')

function findEmail(text){
  const match = text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)
  return match ? match[0] : null
}
function findPhone(text){
  const match = text.match(/\+?\d[\d\s()-]{7,}\d/)
  return match ? match[0].replace(/\s+/g, ' ').trim() : null
}

async function run(){
  if (!fs.existsSync(pdfPath)){
    console.error('No se encontró el CV en:', pdfPath)
    process.exit(1)
  }
  const dataBuffer = fs.readFileSync(pdfPath)
  const parser = new PDFParse({ data: dataBuffer })
  const data = await parser.getText()
  const email = findEmail(data.text)
  const phone = findPhone(data.text)

  let profile = {}
  if (fs.existsSync(profilePath)){
    profile = JSON.parse(fs.readFileSync(profilePath, 'utf8'))
  }
  if (email) profile.email = email
  if (phone) profile.phone = phone

  fs.writeFileSync(profilePath, JSON.stringify(profile, null, 2))
  console.log('Perfil actualizado:', { email, phone })
}

run().catch(err => { console.error(err); process.exit(1) })
