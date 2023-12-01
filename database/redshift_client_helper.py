#!/usr/bin/python
"""
This module contains classes that helps interaction with Redshift
"""

import sys
sys.path.append('D:/Projects/Backend_Serverless App/serverless-app')

import logging
import psycopg2
from database.redshift_client_config import RedshiftClientConfig


class RedshiftClient(object):
    """
    Helper class to interact with AWS Redshift instance
    """
    def __init__(self ):
        self.conn = psycopg2.connect(
            database=RedshiftClientConfig.DB, 
            user=RedshiftClientConfig.REDSHIFT_USER,
            password=RedshiftClientConfig.REDSHIFT_PASSWORD,
            host=RedshiftClientConfig.REDSHIFT_HOST, 
            port=RedshiftClientConfig.REDSHIFT_PORT
        )

    def execute_query_redshift(self, query):
        """
        Execute insert query
        :param query: query to execute
        :return: None
        """
        try:
            cur = self.conn.cursor()
            cur.execute(query)
            self.conn.commit()
        except:
            logging.exception("Query failed. Query: %s", query)

    def execute_read_query_redshift(self, query):
        """
        Execute read query
        :param query: query to execute
        :return: read query result
        """
        try:
            cur = self.conn.cursor()
            cur.execute(query)
            rows = cur.fetchall()
            return rows
        except:
            logging.exception("Read query failed. Query: %s", query)


    def create_table(self, table_name, list_of_fields):
        """
        Create a table in DB
        :param table_name: table name
        :param list_of_fields: list of table field strings like this format
        ['BUILD INT NOT NULL', 'TESTSUITE TEXT NOT NULL', 'PASS_COUNT INT NOT NULL','FAIL_COUNT INT NOT NULL',
        'TASKS TEXT NOT NULL', 'PFM TEXT NOT NULL', 'NUMBER_OF_TASKS TEXT NOT NULL']
        :return: None
        """
        query = 'CREATE TABLE {table_name} ({fields})'.format(table_name=table_name, fields=", ".join(list_of_fields))
        self.execute_query_redshift(query)
        return True

    def insert_into_table(self, table_name, check_entry_query=None, **kwargs):
        """
        Insert data into table
        :param check_entry_query: query to find if entry exists
        :param table_name: table name
        :param kwargs: Params to be passed according to table 
        :return: None
        """
        if check_entry_query:
            entry_exists = bool(len(self.execute_read_query_redshift(check_entry_query)))
            if entry_exists:
                print('Entry exists.  Skipping')
                return
        fields = ', '.join(list(kwargs.keys()))
        values = ''
        for k in list(kwargs.keys()):
            #  TODO to generalize this.
            if k == 'date_inserted':
                values += "TIMESTAMP '{}'".format(kwargs[k]) + ','
                continue
            if type(kwargs[k]) == str or type(kwargs[k]) == str:
                values += "'{}'".format(kwargs[k])
            else:
                values += '{}'.format(kwargs[k])
            if not k == list(kwargs.keys())[-1]:
                values += ', '
        query = "INSERT INTO {table_name} ({fields}) VALUES ({values})".format(
            table_name=table_name, fields=fields, values=values)
        self.execute_query_redshift(query)

