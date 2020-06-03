import React, {useState, useEffect} from 'react';
import { Button, Card, Form, Input, Space, Tooltip } from 'antd';
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
      <Space direction="horizontal">
      <div className="Answer">
      </div>
      </Space>
      
      <Card title={phrase.en} bordered={false} style={{ width: 300 }}>
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
            <Space>
            <Button type="primary" htmlType="submit" onClick={handleCheck}>
              Check
            </Button>
            <Button type="default" htmlType="submit" onClick={() => refresh()}>
              Refresh
            </Button>

            <Tooltip title={phrase.pl} color="gold">
              <Button type="link">Correct answer</Button>
            </Tooltip>
            </Space>
          </Form.Item>
        </Form>
        <Context text={phrase.context} phrase={phrase.en}/>
      </Card>
    </div> : null
  )
};

export default Exercise;