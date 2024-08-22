// src/components/HackathonNews.js
import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import '../styles/hackathonNews.css'
const HackathonNews = () => {
  // Sample data for hackathons
  const hackathons = [
    {
      name: 'AI & ML Hackathon 2024',
      date: 'September 15, 2024',
      description: 'Join the ultimate challenge to create innovative AI solutions.',
      thumbnail: 'https://via.placeholder.com/300x200', // Replace with actual thumbnail URL
      url: '#',
    },
    {
      name: 'Web Development Hackathon',
      date: 'October 5, 2024',
      description: 'Build amazing web applications in just 48 hours.',
      thumbnail: 'https://via.placeholder.com/300x200',
      url: '#',
    },
    {
      name: 'Healthcare Innovation Hackathon',
      date: 'November 20, 2024',
      description: 'Bring your healthcare innovation ideas to life.',
      thumbnail: 'https://via.placeholder.com/300x200',
      url: '#',
    },
    {
      name: 'Sustainability Hackathon',
      date: 'December 12, 2024',
      description: 'Create sustainable solutions for a better future.',
      thumbnail: 'https://via.placeholder.com/300x200',
      url: '#',
    },
  ];

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Upcoming Hackathons</h1>
      <Row>
        {hackathons.map((hackathon, index) => (
          <Col md={6} lg={4} className="mb-4" key={index}>
            <Card>
              <Card.Img variant="top" src={hackathon.thumbnail} />
              <Card.Body>
                <Card.Title>{hackathon.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{hackathon.date}</Card.Subtitle>
                <Card.Text>{hackathon.description}</Card.Text>
                <Button variant="primary" href={hackathon.url}>Register Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default HackathonNews;
