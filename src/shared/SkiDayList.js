import React, { Component } from 'react';
import SkiDayRow from './SkiDayRow';
import SkiDayCount from './SkiDayCount';

export default ({days}) => (
	<div className="ski-day-list">
		<h3>Ski Day List</h3>
		<div className="list-head">
			<span>Date</span>
			<span>Resort</span>
			<span>Powder</span>
			<span>Sun</span>
		</div>

		<div className="list-body">
			{
			days.map((day, i) =>
					<SkiDayRow key={i}
						{...day}/>
				)}
		</div> 
	</div>
)