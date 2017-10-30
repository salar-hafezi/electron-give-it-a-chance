// const React = require('react')
import React from 'react'
// const ReactDOM = require('react-dom')
import ReactDOM from 'react-dom'
// const $ = jQuery = require('jquery')
// const bootstrap = require('bootstrap')

class App extends React.Component {
	render(){
	return(
	<h3 className="text-success">SUCCESS</h3>
	)
	}
}

ReactDOM.render(<App />, document.getElementById('petAppointments'))

/*
$(function () {
    $('#petAppointments').append('<h3 class="text-success">SUCCESS</h3>')
})
*/
