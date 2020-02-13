import React, {useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Summary from './components/Summary';
import Result from './components/Result';
import Spinner from './components/Spinner';
import styled from '@emotion/styled';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const Content = styled.div`
max-width: 500px;
margin:auto;

`;

const FormContent = styled.div`
background-color: #FFF;
padding: 2rem;
border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;
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
      <Content className="col-md-6">
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
