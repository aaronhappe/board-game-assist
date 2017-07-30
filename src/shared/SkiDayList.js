import React, { Component } from 'react';
import SkiDayRow from './SkiDayRow';

export default ({days}) => (
	<div className="ski-day-list">
		<p>Ski Day List</p>
		<div className="list-head">
			<span>Date</span>
			<span>Resort</span>
			<span>Powder</span>
			<span>Backcountry</span>
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