import React, {useState} from 'react';
import { Button, Form, Input, Space } from 'antd';

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

const Exercise = ({phrase}) => {

  const [form] = Form.useForm();
  const [answerValidation, setAnswerValidation] = useState({
    status: null,
    msg: ''
  });
  const [answer, setAnswer] = useState();

  const handleAnswerChange = event => {
    setAnswer(event.target.value);
  }

  const handleCheck = () => {
    setAnswerValidation(validateAnswer(answer, phrase.pl))
  }
  return(
    phrase ? 
    <div className="Exercise">
      <Space direction="vertical">
      <div className="Question">
        <span>English phrase:</span>
        <p>{phrase.en}</p>
      </div>
      <div className="Answer">
        <Form form={form} layout="inline">
          <Form.Item 
            label="Polish Translation" 
            name="answer" 
            validateStatus={answerValidation.status} 
            help={answerValidation.msg}
            hasFeedback
          >
            <Input onChange={handleAnswerChange} value={answer}/>
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit" onClick={handleCheck}>
              Check
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="Context">
        {phrase.context}
      </div>
      </Space>
    </div> : null
  )
};

export default Exercise;