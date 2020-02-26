import React, {useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Summary from './components/Summary';
import Result from './components/Result';
import Spinner from './components/Spinner';
import styled from '@emotion/styled';
import image from './img-00.png';
import 'bootstrap/dist/js/bootstrap.bundle.min';


  const Content = styled.div`

  max-width: 500px;
  margin:auto;

  `;

  const FormContent = styled.div`

  background-color: #FFF;
  padding: 2rem;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border: 1px solid #c6c6c6;
  `


  function App() {

    const [summary, saveSummary] =useState({
      quotation: 0,
      data:{
      brand: '',
      year: '',
      plan:''
    }

    });

      const [loading, saveLoading]=useState(false);
    

    //****Extract data ****//
    
    const {data, quotation} = summary;



    return (

        <Content className="col-md-6 mt-3 mb-5">
          <div className="col-md-8 m-auto">
            <img src={image} alt="logo" className="col-md-12 m-auto"/>
          </div>
          <Header
            title ='Car Insurance Quote' />
          <FormContent>

            <Form 
            saveSummary={saveSummary}
            saveLoading ={saveLoading}
            />
            {loading 
            ?<Spinner/>
            :null
            }
            
            {!loading
            ?<Summary 
            data ={data}/>
            :null}
            
            {!loading
            ?<Result
            quotation={quotation} />
            :null}

          </FormContent>
        </Content>
    );
  }

export default App;
