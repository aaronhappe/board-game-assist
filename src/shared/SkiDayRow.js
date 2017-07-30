import React, { Component } from 'react';

export default ({resort, date, powder, backcountry}) => (
	<div className="ski-day-row">
		<span>{date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}</span>
		<span>{resort}</span>
		<span>{powder}</span>
		<span>{backcountry}</span>
	</div>
)