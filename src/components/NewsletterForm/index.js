import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { mailerlite } from 'src/api';
import useFetchData from 'src/hooks/useFetchData';
import {
  Card, Form, FloatingLabel, Button,
} from 'react-bootstrap';

import './styles.scss';

const NewsletterForm = () => {
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [body, setBody] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState,
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    setFocus('email');
    setBody(data);
  };

  const { isSubmitSuccessful } = formState;

  useEffect(async () => {
    reset();
    console.log(body);
    const { post } = mailerlite;
    if (body) {
      try {
        const { data: response } = await post('/groups/111462336/subscribers', body);
        console.log(response);
      }
      catch (error) {
        if (error.response.data.error.infos.statusCode) console.log(error);
      }
    }
  }, [isSubmitSuccessful, body]);

  return (
    <div className="newsletter-form">
      <Card className="">
        <Card.Body className="">
          {
            success ? (
              <p>Check ta boite mail !</p>
            ) : (
              <Form className="" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                  <FloatingLabel
                    controlId="floatingEmail"
                    label="Ton email"
                    className="mb-3"
                  >
                    <Form.Control type="email" placeholder="Ton email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3">
                  <FloatingLabel
                    controlId="floatingFirstname"
                    label="Ton prénom"
                  >
                    <Form.Control type="text" placeholder="Ton prénom" {...register('firstname', { required: true, maxLength: 80 })} />
                  </FloatingLabel>
                </Form.Group>
                <Button
                  type="submit"
                  className=""
                >
                  S'inscrire
                </Button>
              </Form>
            )
          }
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewsletterForm;
