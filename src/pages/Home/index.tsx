import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import CreateCard from '../../components/CreateCard';
import Header from '../../components/header';
import MyCard from '../../components/MyCard';
import MyOffCanvas from '../../components/MyOffCanvas/Index';
import SearchBar from '../../components/searchBar';
import { PrimaryColor, BackgroundColor, GBackGround, EmphasisColor } from '../../misc/colors';
import axiosCon, { linkApi } from '../../services/ApiService';

import { BackgroundSearch } from './elements';

export default function Home() {
  
  const [EditCanvas, setEditCanvas] = useState<boolean>(false)
  const [CreateCardFlag, setCreateCardFlag] = useState(false)
  const [currentPage, setcurrentPage] = useState(0)
  const [Loading, setLoading] = useState<boolean>(true);
  const [listData, setlistData] = useState<Array<any>>([]);
  const [TotalPageNum, setTotalPageNum] = useState<number>(0);
  const [actualPage, setactualPage] = useState<number>(0);
  const [triggerReload, settriggerReload] = useState<boolean>(false)
  useEffect(() => {

    async function LoadData() {
      let api = axiosCon;

      let response = await api.get(linkApi + "api/Car/ListCarsPerPage?step=10");
      setTotalPageNum(Number(response.data.content.numPages));
      setlistData(response.data.content.response);      
      setLoading(false);
    }

    LoadData();

    return () => {

    }
  }, [])

  async function ReloadData(){

  }

  useEffect(() => {
    if(triggerReload){
      //recarrega pagina, 
      


      //deliga trigger
      settriggerReload(false);
    }

    return () => {
    
    }
  }, [triggerReload])
  
  useEffect(() => {
    console.warn(listData)
  
    return () => {
      
    }
  }, [listData])
  

  useEffect(() => {
    if(actualPage>0 && actualPage<=TotalPageNum){

    }
  
    return () => {
      
    }
  }, [actualPage])
  



  return (
    <>
      <div style={{ backgroundColor: GBackGround, minHeight: "100vh" }}>
        <Header />
        <BackgroundSearch>
          <SearchBar />



        </BackgroundSearch>
        <Container className='mt-4 '>
          <Row className='mb-4'>
            <Col xs="12" md="12" lg="12">
              <div className='d-flex justify-content-between'>
                <h3 style={{ color: PrimaryColor }}>
                  Resultado Pesquisa
                </h3>

                <Button className='' style={{ backgroundColor: EmphasisColor, border: "none" }} onClick={() => {
                  setCreateCardFlag(true);
                }}>
                  Create card
                </Button>
              </div>
            </Col>
          </Row>
          {/* content for cards */}
          <Row>
            {(Loading==true) ?
              
              <div className='w-100 d-flex justify-content-center align-center'>
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Carregando...</span>
                </Spinner>
              </div>
              

              :
              <>
                {listData.map(item => {
                  return (
                    <>
                      <Col xs="12" md="4" lg="4" xl="3" >
                        <MyCard car={item} photo={item.photo}></MyCard>
                      </Col>
                    </>
                  )

                })}

              </>

            }
          </Row>

        </Container>
      </div>





      <MyOffCanvas Titulo='Criar Card' pos='end' show={CreateCardFlag} setShow={setCreateCardFlag}>
        <CreateCard CloseCanvas={setCreateCardFlag} />
      </MyOffCanvas>
      <MyOffCanvas Titulo='Editar Card' pos='start' show={EditCanvas} setShow={setEditCanvas}>
        <p>teste</p>
      </MyOffCanvas>
    </>
  )
}
