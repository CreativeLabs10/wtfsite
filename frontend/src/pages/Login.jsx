import React, { useState } from 'react';
import { Form, Input, Button, Typography, Card, message, Divider, Row, Col } from 'antd';
import { UserOutlined, LockOutlined, GoogleOutlined, GithubOutlined, FacebookOutlined } from '@ant-design/icons';
import './LoginPage.css';

const { Title, Text } = Typography;

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      // Здесь будет логика входа
      await new Promise(resolve => setTimeout(resolve, 1000));
      message.success('Вход выполнен успешно!');
      console.log('Данные входа:', values);
    } catch (error) {
      message.error('Ошибка входа. Проверьте данные');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      {/* Анимированный фон */}
      <div className="background">
        <div className="light purple"></div>
        <div className="light orange"></div>
        <div className="light teal"></div>
      </div>
      
      <Card className="login-card">
        <div className="login-header">
          <Title level={2} className="login-title">Вход в аккаунт</Title>
          <Text type="secondary">Добро пожаловать! Пожалуйста, войдите в свой аккаунт</Text>
        </div>
        
        <Form
          form={form}
          name="login"
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            name="username"
            label="Имя пользователя или Email"
            rules={[
              { 
                required: true, 
                message: 'Пожалуйста, введите имя пользователя или email!' 
              }
            ]}
          >
            <Input 
              prefix={<UserOutlined />} 
              placeholder="Ваше имя или email" 
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Пароль"
            rules={[
              {
                required: true,
                message: 'Пожалуйста, введите пароль!',
              },
            ]}
          >
            <Input.Password 
              prefix={<LockOutlined />} 
              placeholder="Ваш пароль" 
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              size="large"
              block
              loading={loading}
              className="login-button"
            >
              Войти
            </Button>
          </Form.Item>
          
          <Form.Item className="remember-forgot">
            <Row justify="space-between">
              <Col>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <a>Запомнить меня</a>
                </Form.Item>
              </Col>
              <Col>
                <a href="/forgot-password">Забыли пароль?</a>
              </Col>
            </Row>
          </Form.Item>
        </Form>
        
        <Divider>или войдите через</Divider>
        
        <div className="social-login">
          <Button 
            icon={<GoogleOutlined />} 
            className="social-btn google"
          >
            Google
          </Button>
          <Button 
            icon={<GithubOutlined />} 
            className="social-btn github"
          >
            GitHub
          </Button>
          <Button 
            icon={<FacebookOutlined />} 
            className="social-btn facebook"
          >
            Facebook
          </Button>
        </div>
        
        <div className="login-footer">
          <Text>Ещё нет аккаунта? <a href="/register">Зарегистрироваться</a></Text>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;