'use client'

import React from 'react';
import styled from 'styled-components';
import { Button } from '@/components/ui/button';  



// Import or define your StyledButton component

const PageContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const HeroSection = styled.section`
  background: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
  color: white;
  padding: 80px 20px;
  text-align: center;
  
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 100; // Use a light font weight for a modern, sleek look
    font-size: 2.5rem; // Adjust font size as needed
  }
`;

const FeatureSection = styled.section`
  text-align: center;
  padding: 40px 20px;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const FeatureCard = styled.div`
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CoursesSection = styled.section`
  padding: 40px 20px;
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;
const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif; // Consistency in font usage
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05); // Slightly enlarge button on hover for feedback
  }
`;
const CourseCard = styled.div`
  background: #fff;
  border-radius: 8px; /* Slightly rounded corners for a modern look */
  box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* Soft shadow for depth */
  overflow: hidden; /* Ensures content fits within the rounded corners */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px); /* Lift effect on hover */
    box-shadow: 0 8px 16px rgba(0,0,0,0.2); /* Enhanced shadow on hover */
  }

  img {
    width: 100%; /* Ensure the image spans the full width of the card */
    height: 160px; /* Fixed height for consistency */
    object-fit: cover; /* Ensures the image covers the area, cropping as needed */
  }

  h3, p {
    padding: 15px; /* Padding for text content */
  }

  h3 {
    margin-top: 0; /* Adjust as needed to remove unwanted space */
    color: #333; /* Dark color for better readability */
  }

  p {
    padding-bottom: 15px; /* Extra padding at the bottom */
    color: #666; /* Lighter text color for descriptions */
    font-size: 0.9rem; /* Smaller font size for descriptions */
    margin: 0; /* Remove default margins */
    line-height: 1.4; /* Improve readability */
  }
`;

const TestimonialsSection = styled.section`
  background-color: #f9f9f9; /* Lighter background to distinguish the section */
  padding: 60px 20px; /* More padding for a spacious layout */
  text-align: center; /* Center align the content */
`;

const TestimonialsGrid = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap in smaller screens */
  justify-content: center; /* Center the cards horizontally */
  gap: 30px; /* Space between cards */
  max-width: 1200px; /* Maximum width of the grid */
  margin: 0 auto; /* Center the grid on the page */
`;

const TestimonialCard = styled.div`
  // Add more sophisticated styling for testimonials
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  transition: box-shadow 0.3s ease-in-out;

  p {
    color: #333;
    font-family: 'Montserrat', sans-serif;
  }

  small {
    display: block; // Ensure the author is on a new line
    margin-top: 10px;
    color: #666;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.8rem;
  }

  &:hover {
    box-shadow: 0 8px 16px rgba(0,0,0,0.3); // Enhance shadow on hover
  }
`;
const ValuePropositionSection = styled.section`
  padding: 40px 20px;
  text-align: center;
  background-color: #f8f8f8; // Light background to distinguish the section
`;

const ValuePropositionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

const ValuePropositionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.img` // Assuming you're using image files for icons
  width: 50px; // Adjust size as needed
  height: 50px;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin: 5px 0;
`;

const Description = styled.p`
  font-size: 0.95rem;
`;
const Footer = styled.footer`
  background-color: #333; /* Dark background for contrast */
  color: #fff; /* White text for readability */
  text-align: center; /* Center the text */
  padding: 20px 0; /* Adequate padding for spacing */
  font-family: 'Montserrat', sans-serif; /* Consistent font usage */
  font-size: 0.9rem; /* Adjust font size for footer text */
  border-top: 4px solid #2575fc; /* A colored border top for a subtle visual separation */

  p {
    margin: 0; /* Remove default margin */
  }
`;


// Mock data for courses and testimonials
const courses = [
  {
    id: 1,
    title: "Introduction to AI",
    description: "Learn the basics of AI and its applications.",
    // Use direct paths from the public directory
    image: '/assets/x.PNG'
  },
  {
    id: 2,
    title: "Machine Learning Deep Dive",
    description: "An in-depth course on machine learning techniques.",
    // Use direct paths from the public directory
    image: '/assets/y.PNG'
  },
  // Add more courses as needed
  {
    id: 3,
    title: "Chemistry",
    description: "Explore the fundamental concepts of chemistry",
    image:  '/assets/b.PNG'// Adjusted to a more specific image for the course
  },
  
];

const testimonials = [
  { id: 1, author: "Kary Dove", text: "This AI course changed my life!" },
  { id: 2, author: "Peter Goshomi", text: "Incredible learning experience." },
  
];

const HomePage: React.FC = () => {
  return (
    <PageContainer>
      <HeroSection>
        <h1>Unlock the Future of Learning with AI</h1>
        <StyledButton>Get Started</StyledButton>
      </HeroSection>

      <FeatureSection>
        <h2>Main Features</h2>
        <FeaturesGrid>
          <FeatureCard>
            <h3>Customized Learning Paths</h3>
            <p>Create your personalized learning journey based on your interests and goals.</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Expert-Curated Content</h3>
            <p>Access courses designed by industry experts, ensuring you get the best knowledge.</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Interactive Learning Experience</h3>
            <p>Engage with interactive quizzes, assignments, and projects to test your knowledge.</p>
          </FeatureCard>
        </FeaturesGrid>
      </FeatureSection>

      <CoursesSection>
        <h2>Popular Courses</h2>
        <CourseGrid>
          {courses.map(course => (
            <CourseCard key={course.id}>
              <img src={course.image} alt={course.title} />
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </CourseCard>
          ))}
        </CourseGrid>
      </CoursesSection>
      <ValuePropositionSection>
        <h2>Invest in your career with AI</h2>
      
        <ValuePropositionGrid>
          <ValuePropositionCard>
            <Icon src='/assets/q.PNG' alt='Learn anything icon' />
            <Title>Learn anything</Title>
            <Description>Explore any interest or trending topic, take prerequisites, and advance your skills</Description>
          </ValuePropositionCard>
          <ValuePropositionCard>
            <Icon src='/assets/j.PNG' alt='Save money icon' />
            <Title>Save money</Title>
            <Description>Spend less money on your learning if you plan to take multiple courses this year</Description>
          </ValuePropositionCard>
          <ValuePropositionCard>
            <Icon src='/assets/k.PNG' alt='Flexible learning icon' />
            <Title>Flexible learning</Title>
            <Description>Learn at your own pace, move between multiple courses, or switch to a different course</Description>
          </ValuePropositionCard>
        </ValuePropositionGrid>
      </ValuePropositionSection>

      <TestimonialsSection>
        <h2>What Our Users Say</h2>
        <TestimonialsGrid>
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id}>
              <p>"{testimonial.text}"</p>
              <small>— {testimonial.author}</small>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </TestimonialsSection>

      <Footer>
        <p>© AI Course Generator. All rights reserved.</p>
      </Footer>
    </PageContainer>
  );
};

export default HomePage;
