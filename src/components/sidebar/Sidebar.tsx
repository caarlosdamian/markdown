import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import './Sidebar.scss';

export const Sidebar = () => {

  const {show} = useSelector((state:RootState)=> state.sidebar )
  return <div className={`sidebar ${show && 'show'}`}>Sidebar</div>;
};
