import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Form, Input, Layout, notification, Row } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import AnimeList from './components/AnimeList/AnimeList';
import { ApolloProvider } from '@apollo/client';
import { client } from './api/api';

function App() {

    const [form] = Form.useForm();
    const { Item } = Form;
    
    const onSubmitForm = (dataForm: any) => {
        console.log("dataForm:", dataForm);
    }

    const onSubmitFormError = () => {
        notification.error({
          message: "Введите данные",
        });
      };

    return (
        <ApolloProvider client={client}>
            <Layout className="App">
                <Header/>
                <Content style={{ padding: '0 50px', marginTop: 64, textAlign: 'center' }}>
                    <span>Список аниме</span>
                    <Form
                        layout="horizontal"
                        form={form}
                        onFinishFailed={onSubmitFormError}
                        onFinish={onSubmitForm}
                    >
                        <Item
                            name="name"
                            rules={[
                            {
                                required: true,
                                message: "Введите название",
                            },
                            ]}
                        >
                            <Input style={ { maxWidth: '450px'} } allowClear placeholder='Input text'/>
                        </Item>
                    </Form>
                    <Row gutter={[0, 25]} justify="center">
                        <AnimeList/>
                    </Row>
                </Content>
            </Layout>
        </ApolloProvider>
    );
}

export default App;
