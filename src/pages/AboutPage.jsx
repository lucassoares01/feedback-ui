import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function AboutPage(props) {
  return (
    <Card>
      <div className='about'>
        <h1>Sobre o Projetot</h1>
        <p>Essa é uma Web Aplicação feita com react que permite ao usuario deixar seu feedback sobre um produto ou servço</p>
        <p>Versão: 1.0.0</p>

        <p>
          <Link to='/'>Voltar para a Home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
