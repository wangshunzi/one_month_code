import React from "react";
import {Form, Input, Modal} from "antd";

const layout = {
    labelCol: {span: 5},
    wrapperCol: {span: 16},
};


class AddCategory extends React.Component {
    render() {
        return (
            <Modal
                title="新增分类"
                visible={this.props.visible}
                onOk={() => {
                    this.formDom.validateFields().then(result=>{
                        console.log("获取表单对象的内容", result)
                        this.props.submitFunc(result)
                    })
                }}
                onCancel={
                    this.props.hidePaneFunc
                }
                destroyOnClose={true}
                okText={"提交"}
                cancelText={"取消"}
            >
                <Form
                    ref={dom=>this.formDom=dom}
                    {...layout}
                    onFinish={values => {
                        console.log('Success:', values);
                    }}
                >
                    <Form.Item
                        label="分类名称"
                        name="name"
                        rules={[{required: true, message: '此字段必须填写!'}]}
                    >
                        <Input/>
                    </Form.Item>

                </Form>


            </Modal>
        )
    }
}

export default AddCategory;