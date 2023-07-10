import { useEffect } from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    font-weight: 700;
    text-transform: uppercase;
    font-size:20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;

    }
`

const Formulario = () => {

    const monedas =[
        {id: 'USD', nombre: 'dolar de EEUU'},
        {id: 'MXN', nombre: 'Peso Mexicano'},
        {id: 'EUR', nombre: 'Euro'},
        {id: 'GBP', nombre: 'Libra Esterlina'}
    ]


    const [moneda,SelectMonedas] = useSelectMonedas('Elige tu Moneda',monedas);

    useEffect  ( ()=>{
        const consultarAPI = async () =>{
            const url="https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
            const respuesta = await fetch(url);
            const resultado =  await respuesta.json();
            console.log(resultado.Data);

        }
        consultarAPI();
    },[]) 

    return (
        <form>
            <SelectMonedas/>
            {moneda }

            <InputSubmit
                type='submit' value="Cotizar"
            />

        </form>
    )
}

export default Formulario