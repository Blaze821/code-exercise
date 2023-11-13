/* eslint-disable */
import React, { useEffect, useMemo } from 'react'
import useUpdate from '@/hooks/useUpdate'
import { Form, Input } from 'antd'
import CSS from './index.less'
import { addPrefix, removePrefix } from './helpers'

const EVENT_NAME_LIST = ['onChange', 'onBlur']

/**
 * ColorInput
 * @param {*} props
 * @return {React.ReactElement}
 */
const ColorInput = React.forwardRef(function (props, ref) {
  const { value = '', ...restProps } = props
  // 事件包装
  const wrappedEvent = useMemo(() => {
    const result = {}
    EVENT_NAME_LIST.forEach((el) => {
      result[el] = (event) => {
        let value = event.target.value
        value = value ? addPrefix(`${value}`) : ''
        if (typeof props[el] === 'function') props[el](value)
      }
    })
    return result
  }, [props])

  return (
    <Input
      value={removePrefix(`${value}`)}
      {...{
        ...restProps,
        ...wrappedEvent,
      }}
    />
  )
})

export const colorValueRE = /^#[0-9a-f]{6}$/i

/**
 * 自定义颜色输入表单项
 * @param {*} props
 * @return {React.ReactElement}
 */
function CustomColorInput(props) {
  const { name = 'customColor', form, fieldOptions, formItemProps, inputProps, children } = props
  // 重新刷新组件，旨为了获取`initialValue`值更新色卡
  const update = useUpdate()
  useEffect(update, [])
  const backgroundColor = form.getFieldValue(name)

  return (
    <Form.Item required label="自定义颜色" {...formItemProps}>
      <div className={CSS['color-example']}>
        <div style={{ backgroundColor }}>{!backgroundColor ? '空' : null}</div>
      </div>
      <Form.Item style={{ display: 'inline-block', width: 100, whiteSpace: 'nowrap' }}>
        {form.getFieldDecorator(name, {
          rules: [
            {
              required: true,
              pattern: colorValueRE,
              message: '请输入正确的6位色值',
            },
          ],
          validateTrigger: EVENT_NAME_LIST,
          ...fieldOptions,
        })(<ColorInput prefix="#" minLength={6} maxLength={6} {...inputProps} />)}
      </Form.Item>
      <Form.Item style={{ display: 'inline-block', marginLeft: 12 }}>{children}</Form.Item>
    </Form.Item>
  )
}

export default CustomColorInput
