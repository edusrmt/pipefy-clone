import React from 'react';

import { FaRobot, FaQuestionCircle, FaRegCommentDots } from 'react-icons/fa';
import { AiOutlineAppstore, AiOutlineLayout, AiFillDatabase, AiOutlineGlobal } from 'react-icons/ai';

import { Container } from './styles';

export default function Sidebar() {
  return (
    <Container>
        <div className='top'>
          <a href="/" title="Pipes"><AiOutlineAppstore /></a>
          <a href="/" title="Databases"><AiFillDatabase /></a>
          <a href="/" title="Relatórios"><AiOutlineLayout /></a>
          <a href="/" title="Automações"><FaRobot /></a>
          <a href="/" title="Portais"><AiOutlineGlobal /></a>
        </div>
        <div className="bottom">
          <span>Help</span>
          <a href="/" title="Ajuda"><FaQuestionCircle /></a>
          <a href="/" title="Chat"><FaRegCommentDots /></a>
        </div>
    </Container>
  );
}
