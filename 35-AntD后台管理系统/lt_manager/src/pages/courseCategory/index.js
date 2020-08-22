import React from "react";
import "./index.less"
import {Button, Card, message, Popconfirm, Space, Table} from 'antd';
import {addCategory, deleteCategory, getCategoryList, updateCategory} from "../../api/categoryApi";
import AddCategory from "../../components/addCategory";
import EditCategory from "../../components/editCategory";

class CourseCategory extends React.Component {
    state = {
        data: [],
        loading: true,
        showFlag: 0, // 0 全部隐藏 1 显示新增 2 显示编辑
        editItem: {}
    }

    _hideAllCategoryPane = () =>{
        this.setState({
            showFlag: 0
        })
    }
    _showAddPane = () => {
        this.setState({
            showFlag: 1
        })
    }
    _showEditPane = () => {
        this.setState({
            showFlag: 2
        })
    }


    _handlerSubmit = (values) => {
        addCategory(values.name).then(result=>{
            if (result.code === 0) {
                message.success("添加分类成功")
                this.requestData()
                this.setState({
                    visible: false
                })
            }else {
                message.error("添加分类失败")
            }
        })
    }
    componentDidMount() {
        this.requestData()
    }
    requestData() {
        this.setState({
            loading: true
        })
        getCategoryList().then(result => {
            // console.log(result)
            this.setState({
                data: result,
                loading: false
            })
        })
    }

    columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
            align: "center",
            width: "100px"
        },
        {
            title: "分类名称",
            dataIndex: "name",
            key: "name",
            align: "center"
        },
        {
            title: "操作",
            key: "id",
            align: "center",
            width: "150px",
            render: (text, record) => {
                console.log(text, record)
                return (
                    <Space size="middle">
                        <Button type={'primary'} onClick={()=>{
                            this.setState({
                                editItem: record
                            })
                            this._showEditPane()
                        }}>编辑</Button>
                        <Popconfirm
                            title="你真的舍得把我删除嘛?"
                            onConfirm={() => {
                                console.log("删除")
                                deleteCategory(record.id).then(result => {
                                    if (result.code === 0) {
                                        message.success("删除成功")
                                        this.requestData()
                                    } else {
                                        message.error("删除失败")
                                    }
                                })
                            }}
                            onCancel={() => {
                                console.log("quxiao")
                            }}
                            okText="立即删除"
                            cancelText="放过你"
                        >
                            <Button type={'primary'} danger>删除</Button>
                        </Popconfirm>
                    </Space>
                )
            }
        }
    ]

    render() {
        return (
            <Card title="分类管理" extra={<Button type={"primary"} onClick={this._showAddPane}>新增</Button>}>
                <Table
                    dataSource={this.state.data}
                    columns={this.columns}
                    bordered={true}
                    loading={this.state.loading}
                    pagination={{
                        defaultPageSize: 4
                    }}
                    rowKey={"id"}
                />

               <AddCategory
                    visible={this.state.showFlag === 1}
                    hidePaneFunc={this._hideAllCategoryPane}
                    submitFunc={this._handlerSubmit}
               />

               <EditCategory
                   visible={this.state.showFlag === 2}
                   hidePaneFunc={this._hideAllCategoryPane}
                   editItem={this.state.editItem}
                   updateFunc={values=>{
                       console.log("应该编辑的数据结果", values)
                       const {id, name} = values;
                       updateCategory(id, name).then(result=>{
                           if (result.code === 0) {
                               message.success("更新成功")
                               this.requestData()
                               this._hideAllCategoryPane()
                           }else {
                               message.error("更新失败")
                           }
                       })
                   }}
               />

            </Card>
        )
    }
}

export default CourseCategory;