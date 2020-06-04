import React, {useState, useEffect} from 'react';
import { Button, Card, Form, Input, Space, Tooltip } from 'antd';
import {InfoCircleFilled} from '@ant-design/icons';
import Context from './Context/Context';

import './Exercise.scss';

const setValidationStatus = (status, msg) => ({
  status,
  msg
})
function validateAnswer(given, correct) {

  if(!given) {
      return setValidationStatus('', '');
  }
  if(!given.localeCompare(correct, 'pl', {sensitivity: 'base'})) {
    return setValidationStatus('success', 'Good answer!')
  } else {
    return setValidationStatus('error', 'Wrong answer :(')
  }
}

const ExerciseTitle = ({phrase}) => {
  return(
    <Space>
      {phrase.en}
      <Tooltip title={phrase.pl} ><InfoCircleFilled /></Tooltip>
    </Space>
  )
}

const validationStatusDefinition = {
  SUCCESS: 'success',
  ERROR: 'error'
}

const Exercise = ({phrase, refresh}) => {

  const [form] = Form.useForm();
  const [answerValidation, setAnswerValidation] = useState({
    status: null,
    msg: ''
  });
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    setAnswer("");
    setAnswerValidation(setValidationStatus(null, ""))
    form.resetFields();
  }, [phrase])

  const handleAnswerChange = event => {
    setAnswer(event.target.value);
  }

  const handleCheck = () => {
    setAnswerValidation(validateAnswer(answer, phrase.pl))
    setAnswer("")
  }
  return(
    phrase ? 
    <div className="Exercise">
      <Card title={<ExerciseTitle phrase={phrase}/>} bordered={false} style={{ width: 300 }}>
      <Form form={form} layout="vertical">
          <Form.Item 
            label="Translation"
            name="answer" 
            validateStatus={answerValidation.status} 
            help={answerValidation.msg}
            hasFeedback
          >
            <Input onChange={handleAnswerChange} value={answer} autoComplete="off"/>
          </Form.Item>
          <Form.Item >
            { answerValidation.status === validationStatusDefinition.SUCCESS ?
              <Button type="default" htmlType="submit" onClick={() => refresh()}>
                Next phrase
              </Button> :
              <Button type="primary" htmlType="submit" onClick={handleCheck}>
                Check
              </Button>   
            }
          </Form.Item>
        </Form>
        <Context text={phrase.context} phrase={phrase.en}/>
      </Card>
    </div> : null
  )
};

export default Exercise;