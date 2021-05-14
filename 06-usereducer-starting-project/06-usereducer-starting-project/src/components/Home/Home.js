import React from 'react';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-content';
import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
     
    </Card>
  );
};

export default Home;
