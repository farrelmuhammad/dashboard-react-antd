import { HomeOutlined } from '@ant-design/icons'
import { Card, Col, Row } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React, { useState } from 'react'

const Dashboard = () => {

    return (
        <>
            <Row>
                <Col span={18} push={6}>
                    <Card
                        style={{
                            marginBottom: 16,
                            height: '50%',
                        }}
                        type="inner"
                        title="Lokasi"
                        extra={<a href="#">Lihat Semua</a>}
                    >
                        <Row>
                            <Col span={8}>
                                <Card
                                    style={{
                                        margin: 5,
                                        borderRadius: "20px",
                                        backgroundColor: '#73d13d'
                                    }}
                                    bordered
                                    rounded
                                >
                                    <Row>
                                        <Col span={12} className="p-3">
                                            <HomeOutlined
                                                style={{
                                                    marginLeft: -20,
                                                    fontSize: '40px',
                                                    color: 'white'
                                                }}
                                            />
                                        </Col>
                                        <Col span={12} className='text-end'>
                                            <h1 className='text-white'>20</h1>
                                            <h6 className='text-white'>Induk</h6>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card
                                    style={{
                                        margin: 5,
                                        borderRadius: "20px",
                                        backgroundColor: '#73d13d'
                                    }}
                                    bordered
                                    rounded
                                >
                                    <Row>
                                        <Col span={12} className="p-3">
                                            <HomeOutlined
                                                style={{
                                                    marginLeft: -20,
                                                    fontSize: '40px',
                                                    color: 'white'
                                                }}
                                            />
                                        </Col>
                                        <Col span={12} className='text-end'>
                                            <h1 className='text-white'>20</h1>
                                            <h6 className='text-white'>Induk</h6>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card
                                    style={{
                                        margin: 5,
                                        borderRadius: "20px",
                                        backgroundColor: '#73d13d'
                                    }}
                                    bordered
                                    rounded
                                >
                                    <Row>
                                        <Col span={12} className="p-3">
                                            <HomeOutlined
                                                style={{
                                                    marginLeft: -20,
                                                    fontSize: '40px',
                                                    color: 'white'
                                                }}
                                            />
                                        </Col>
                                        <Col span={12} className='text-end'>
                                            <h1 className='text-white'>20</h1>
                                            <h6 className='text-white'>Induk</h6>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    </Card>
                    <Row>
                        <Col span={12}>
                            <Card
                                style={{
                                    marginRight: 16,
                                    marginBottom: 16,
                                }}
                                title="Card title"
                                bordered={false}
                            >
                                Card content
                            </Card>
                            <Card
                                style={{
                                    marginRight: 16,
                                }}
                                title="Card title"
                                bordered={false}
                            >
                                Card content
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card
                                style={{
                                    height: "100%",
                                }}
                                title="Card title"
                                bordered={false}
                            >
                                Card content
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col span={6} pull={18}>
                    <Card
                        hoverable
                        style={{
                            width: 240,
                        }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Dashboard