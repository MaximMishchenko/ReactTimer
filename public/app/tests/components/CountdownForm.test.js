import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import $ from 'jQuery'
import ReactTestUtils from 'react-addons-test-utils'
import CountdownForm from '../../components/CountdownForm'

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist()
  })

  it('should call onSetCountdown if valid seconds entered', () => {
    let spy = expect.createSpy()
    let countdownForm = ReactTestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>)
    let $el = $(ReactDOM.findDOMNode(countdownForm))

    countdownForm.refs.seconds.value = '109'
    ReactTestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toHaveBeenCalledWith(109)
  })

  it('should not call onSetCountdown if data doesnt valid', () => {
    let spy = expect.createSpy()
    let countdownForm = ReactTestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>)
    let $el = $(ReactDOM.findDOMNode(countdownForm))

    countdownForm.refs.seconds.value = 'qq'
    ReactTestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toNotHaveBeenCalled()
  })
})
