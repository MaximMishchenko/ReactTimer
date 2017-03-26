import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import $ from 'jQuery'
import ReactTestUtils from 'react-addons-test-utils'
import Timer from '../../components/Timer'

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist()
  })

  it('should start timer on started status', (done) => {
    let timer = ReactTestUtils.renderIntoDocument(<Timer/>)
    timer.handleStatusChangle('started')

    expect(timer.state.count).toBe(0)

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('started')
      expect(timer.state.count).toBe(1)
      done()
    }, 1001)
  })

  it('should pause timer on paused status', (done) => {
    let timer = ReactTestUtils.renderIntoDocument(<Timer/>)

    timer.state.count = 10
    timer.handleStatusChangle('started')
    timer.handleStatusChangle('paused')

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('paused')
      expect(timer.state.count).toBe(10)
      done()
    }, 1001)
  })

  it('should clear count on stopped status', (done) => {
    let timer = ReactTestUtils.renderIntoDocument(<Timer/>)

    timer.state.count = 10
    timer.handleStatusChangle('started')
    timer.handleStatusChangle('stopped')

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('stopped')
      expect(timer.state.count).toBe(0)
      done()
    }, 1001)
  })
})
