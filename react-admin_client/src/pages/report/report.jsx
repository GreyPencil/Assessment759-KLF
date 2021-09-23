import React, {Component} from 'react'
import './report.less'
import {
    Card,
    Table
} from 'antd'
import {formateDate} from "../../utils/dateUtils";

export default class Report extends Component {
    state = {
        users: [],
        roles: [],
        isShow: false
    }

    initColumns = () => {
        this.columns = [
            {
                title: 'User Name',
                dataIndex: 'user_name'
            },
            {
                title: 'Activity',
                dataIndex: 'activity_name'
            },

            {
                title: 'Amount',
                dataIndex: 'amount'
            },
            {
                title: 'First Occurrence',
                dataIndex: 'first_occurrence',
                render: formateDate
            },
            {
                title: 'Last Occurrence',
                dataIndex: 'last_occurrence',
                render: formateDate
            }
        ]
    }
    getUsers = async ()=> {

    }

    componentWillMount () {
        this.initColumns()
    }

    componentDidMount () {
        this.getUsers()
    }

    render() {
        return (
            <Card>
                <Table
                    bordered
                    // rowKey='_id'
                    // dataSource={users}
                    columns={this.columns}
                    pagination={{defaultPageSize: 2}}
                />
            </Card>
        )
    }
}