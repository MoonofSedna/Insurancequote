import React, {useState} from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {yearDifference, calculateBrand, getPlan} from '../helper';




const Camp = styled.div `
    display:flex;
    margin-bottom: 1rem;
    align-items: center;
    
`;

const Label = styled.label`

    flex: 0 0 100px;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 1em;

`;

const Select = styled.select`
    display:block;
    width:100%;
    padding: 0.5rem;
    border: 1px solid #e1e1e1;
    font-size: 1em;
    background-color:#f7f7f7;
`;
const InputRadio = styled.input`

    margin: 0 0.8rem;
    width: 15px;
    height: 15px;
    

`;

const Boton = styled.button`

    background-color:#4e8195;
    font-size: 1 rem;
    color: #fff;
    margin-top: 10%;
    font-weight: bold;
    transition: background-color .3s ease;

    &:hover{
        background-color:#304f5a;
        cursor:pointer;
        color: #fff;
    }

`;

const Error = styled.div `
    background-color:#f20000;
    color:white;
    padding:1rem;
    width:100%;
    text-align: center;
    margin-bottom:1rem;
`;

//**** Form data ****//

const Form = ({saveSummary, saveLoading}) => {

    const [data, saveData] = useState({
        brand: '',
        year:'',
        plan:''
    });

    const [error, saveError]= useState(false);


    
    //****Extract the data****//

    const {brand, year, plan} = data;

    //****Read form data and place it in the state ****//

    const getInf = e => {

        saveData({
            ...data,
            [e.target.name] : e.target.value
        })
    }


    //**** When the user submits ****//

    const hadleSubmit = e =>{
        e.preventDefault();

        if(brand.trim() === '' || year.trim() === '' || plan.trim() === ''){
            saveError(true);
            return;
        }

        saveError(false);

        //**** Base of the discount per year in $ ****//

        let result = 2000;

        //**** Get the difference of years ****//

        const difference = yearDifference(year);
        

        //****3% is subtracted for each year ****//

            result -= ((difference * 3) * result) / 100;
            

            // American 15%
            // Asian 5%
            // European 30%

            result = calculateBrand(brand) * result;


            // Basic increases 20%
            // Complet increases 50%

            const planIncrease = getPlan(plan);
            result =  parseFloat(planIncrease * result).toFixed(2);
            
            saveLoading(true);

            setTimeout(() => {
            // Remove the spinner
                saveLoading(false);
            // Show result
                saveSummary({
                    quotation: Number(result),
                    data
                });
                
            }, 3000);
            
            
    }




    return ( 
        <form className="form-group" onSubmit={hadleSubmit}>
            {error
            ? <Error>All fields are required</Error>
            :null}
            <Camp>
                <Label>Brand</Label>
                <Select className="custom-select custom-select-md mb-3"
                    name="brand"
                    value={brand}
                    onChange={getInf}
                >
                    <option value="">--Select--</option>
                    <option value="American">American</option>
                    <option value="European">European</option>
                    <option value="Asian">Asian</option>
                </Select>
            </Camp>

            <Camp>
                <Label>Year</Label>
                <Select className="custom-select custom-select-md mb-3"
                    name="year"
                    value={year}
                    onChange={getInf}
                >
                    <option value="">--Select--</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Camp>

            <Camp>
                <Label>Plan</Label>
                <InputRadio className="form-control"
                type='radio'
                name='plan'
                value='Basic'
                checked={plan === "Basic"}
                onChange={getInf}
                /> Basic
                <InputRadio className="form-control"
                type='radio'
                name='plan'
                value='Complete'
                checked={plan === "Complete"}
                onChange={getInf}
                /> Complete
                
            </Camp>

            <Boton className='btn btn-block' type="submit">Quote</Boton>
        </form>
     );
}


Form.propTypes={
    saveSummary: PropTypes.func.isRequired,
    saveLoading: PropTypes.func.isRequired
}
 
export default Form;