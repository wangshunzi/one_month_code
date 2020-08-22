import React from "react";
import {Form, Input, Modal} from "antd";

const layout = {
    labelCol: {span: 5},
    wrapperCol: {span: 16},
};


class EditCategory extends React.Component {

    render() {
        let {editItem} = this.props
        console.log("需要编辑数据", editItem)
        return (
            <Modal
                title="编辑分类"
                visible={this.props.visible}
                onOk={() => {
                    this.formDom.validateFields().then(result=>{
                        // console.log("获取表单对象的内容", result)
                        this.props.updateFunc(result)
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
                    initialValues={editItem}
                >
                    <Form.Item
                        label="分类ID"
                        name="id"
                        rules={[{required: true, message: '此字段必须填写!'}]}
                    >
                        <Input disabled/>
                    </Form.Item>

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

export default EditCategory;