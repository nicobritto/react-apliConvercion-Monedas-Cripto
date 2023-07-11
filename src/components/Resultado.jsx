import styled from '@emotion/styled'

const Contenedor = styled.div`
    color: #100f0f;
    font-family: 'Lato', sans-serif;
    display: flex;
    gap: 1rem;
    margin-top: 30px;
    align-items: center;
  `

const Texto = styled.p`
    font-size:18px;
    span{
      font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 24px;
    span{
      font-weight: 700;
    }
`
const Imagen = styled.img`
   display: block;
   width: 120px;


   
`

const Resultado = ({ resultado }) => {

  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCY24HOUR, IMAGEURL, LASTUPDATE } = resultado;

  return (

    <Contenedor>
      <Imagen 
          src={`https://cryptocompare.com/${IMAGEURL}`} 
          alt='imagen cripto'/> 
      <div>
        <Precio>El precio es de <span>{PRICE}</span></Precio>
        <Texto>El precio mas alto del dia <span>{HIGHDAY}</span></Texto>
        <Texto>El preciomas bajo del dia <span>{LOWDAY}</span></Texto>
        <Texto>Variacion ultimas 24 hs <span>{PRICE}</span></Texto>
        <Texto>ultima actualizacion <span>{LASTUPDATE}</span></Texto>

      </div>
    </Contenedor>

  )
}

export default Resultado