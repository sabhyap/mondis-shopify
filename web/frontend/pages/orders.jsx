import { Card, Page, Layout, TextContainer, Text, DataTable } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import {useState} from "react";

export default function PageName() {
 
  return (
    <Page>
      <TitleBar
        title="Administrare Colete"
       
      />
      
      <Layout>
        <Layout.Section>
        <Card sectioned>
          <div style={{width:"100%",overflowX:"scroll"}}>
          <iframe src="https://mondis-sell.vercel.app/orders/" style={{border:"0px",width:"150%",height:"100vh"}}></iframe>
          </div>
        </Card>
        </Layout.Section>
    
      </Layout>
    </Page>
  );
}
