import { Card, Page, Layout, TextContainer, Text, DataTable } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation } from "react-i18next";

export default function PageName() {
  const { t } = useTranslation();
  const ordersData = JSON.parse(fetch("http://localhost:3000/orders_api"));
  const rows = [
    ['Emerald Silk Gown', '$875.00', 124689, 140, '$122,500.00'],
    ['Mauve Cashmere Scarf', '$230.00', 124533, 83, '$19,090.00'],
    [
      'Navy Merino Wool Blazer with khaki chinos and yellow belt',
      '$445.00',
      124518,
      32,
      '$14,240.00',
    ],
  ];
  return (
    <Page>
      <TitleBar
        title="Sell Orders"
       
      />
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Text variant="headingMd" as="h2">
              Sell Orders
            </Text>
            <TextContainer>
            <DataTable
          columnContentTypes={[
            'text',
            'numeric',
            'numeric',
            'numeric',
            'numeric',
          ]}
          headings={[
            'Customer Name',
            'Order ID',
            'Price',
            'No. of Products',
            'Net Estimated Price',
          ]}
          rows={rows}
          totals={['', '', '', 255, '$155,830.00']}
        />
            </TextContainer>
          </Card>
       
        </Layout.Section>
    
      </Layout>
    </Page>
  );
}
