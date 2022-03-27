import React, { useEffect, useState } from 'react'
import { Steps, Button } from 'antd'
import { Switch, Route, withRouter } from 'react-router'
import Step1 from './Step1'
import Step2 from './Step2'

const { Step } = Steps

const AboutUs: React.FC = props => {
  const { history } = props
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (step !== 0) {
      history.push(`/about-us/${step}`)
    }
  }, [step])

  const onClick = () => {
    setStep(step + 1)
  }

  return (
    <div>
      <Steps current={step}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>
      <Switch>
        <Route exact path="/about-us/1" component={Step1} />
        <Route exact path="/about-us/2" component={Step2} />
      </Switch>
      <Button onClick={onClick}>下一步</Button>
    </div>
  )
}

export default withRouter(React.memo(AboutUs))
