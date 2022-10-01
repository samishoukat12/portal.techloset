import React from 'react';
import { MagicSpinner } from 'react-spinners-kit';
import { colors } from '../../constants/Color';
import './splash.css';
export default function SplashScreen() {
  return (
    <div className='body'>
      <div className='loading'>
        <div >
          <MagicSpinner size={70} color={colors.lightBlue} />
        </div>
      </div>
    </div>
  );
}
