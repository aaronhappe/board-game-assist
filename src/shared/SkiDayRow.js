import React, { Component } from 'react';
import SunModule from './SunModule';
import SnowflakeModule from './SnowflakeModule';

export default ({resort, date, powder, sun}) => (
	<div className="ski-day-row">
		<span>{date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}</span>
		<span>{resort}</span>
		<span>{(powder) ? <SnowflakeModule /> :null}</span>
		<span>{(sun) ? <SunModule /> : null}</span>
	</div>
)