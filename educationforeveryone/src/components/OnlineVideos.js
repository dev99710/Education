// src/components/OnlineVideos.js
import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const OnlineVideos = () => {
  // Sample data for videos
  const videos = [
    {
      title: 'Introduction to Machine Learning',
      description: 'Learn the basics of Machine Learning in this introductory course.',
      thumbnail: 'https://via.placeholder.com/300x200', // Replace with actual thumbnail URL
      url: '#',
    },
    {
      title: 'React for Beginners',
      description: 'Start building web applications with React JS.',
      thumbnail: 'https://via.placeholder.com/300x200',
      url: '#',
    },
    {
      title: 'Data Structures and Algorithms',
      description: 'Understand fundamental data structures and algorithms.',
      thumbnail: 'https://via.placeholder.com/300x200',
      url: '#',
    },
    {
      title: 'Artificial Intelligence in Healthcare',
      description: 'Explore how AI is revolutionizing the healthcare industry.',
      thumbnail: 'https://via.placeholder.com/300x200',
      url: '#',
    },
  ];

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Online Education Videos</h1>
      <Row>
        {videos.map((video, index) => (
          <Col md={6} lg={4} className="mb-4" key={index}>
            <Card>
              <Card.Img variant="top" src={video.thumbnail} />
              <Card.Body>
                <Card.Title>{video.title}</Card.Title>
                <Card.Text>{video.description}</Card.Text>
                <Button variant="primary" href={video.url}>Watch Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OnlineVideos;
