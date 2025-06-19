import React, { useState } from 'react';
import { Form, Input, Button, Typography, Card, message } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import './RegisterPage.css';

const { Title, Text } = Typography;

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      // Здесь будет логика регистрации
      await new Promise(resolve => setTimeout(resolve, 1500));
      message.success('Регистрация прошла успешно!');
      console.log('Регистрационные данные:', values);
      form.resetFields();
    } catch (error) {
      message.error('Ошибка регистрации');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      {/* Анимированный фон */}
      <div className="background">
        <div className="light pink"></div>
        <div className="light blue"></div>
        <div className="light green"></div>
      </div>
      
      <Card className="register-card">
        <div className="register-header">
          <Title level={2} className="register-title">Создать аккаунт</Title>
          <Text type="secondary">Зарегистрируйтесь, чтобы получить доступ</Text>
        </div>
        
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
          layout="vertical"
        >
          <Form.Item
            name="username"
            label="Имя пользователя"
            rules={[
              { 
                required: true, 
                message: 'Пожалуйста, введите имя пользователя!' 
              },
              {
                min: 3,
                message: 'Имя должно содержать минимум 3 символа',
              },
            ]}
          >
            <Input 
              prefix={<UserOutlined />} 
              placeholder="Ваше имя" 
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: 'email',
                message: 'Некорректный email адрес!',
              },
              {
                required: true,
                message: 'Пожалуйста, введите ваш email!',
              },
            ]}
          >
            <Input 
              prefix={<MailOutlined />} 
              placeholder="example@mail.com" 
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
              {
                min: 6,
                message: 'Пароль должен содержать минимум 6 символов',
              },
            ]}
            hasFeedback
          >
            <Input.Password 
              prefix={<LockOutlined />} 
              placeholder="Ваш пароль" 
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Подтвердите пароль"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Пожалуйста, подтвердите пароль!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Пароли не совпадают!'));
                },
              }),
            ]}
          >
            <Input.Password 
              prefix={<LockOutlined />} 
              placeholder="Повторите пароль" 
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
              className="register-button"
            >
              Зарегистрироваться
            </Button>
          </Form.Item>
        </Form>
        
        <div className="register-footer">
          <Text>Уже есть аккаунт? <a href="/login">Войти</a></Text>
        </div>
      </Card>
    </div>
  );
};

export default RegisterPage;