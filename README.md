Anotações do estudo de MySQL

FONTE: https://www.w3schools.com/mysql/mysql_unique.asp

## INSTRUÇÃO 

    SELECT // extrai dados de um banco de dados
        SELECT column1, column2, ... FROM table_name; especifica quais dsos pegar
        SELECT * FROM table_name; todos os dados
        
    UPDATE // atualiza dados em um banco de dados
        UPDATE table_name SET column1 = value1, column2 = value2, ...WHERE condition;

    DELETE // exclui dados de um banco de dados
        DELETE FROM table_name WHERE condition;

    INSERT INTO // insere novos dados em um banco de dados
        INSERT INTO table_name (column1, column2, column3, ...) VALUES (value1, value2, value3, ...);

    CREATE DATABASE // cria um novo banco de dados
        CREATE TABLE table_name (
            column1 datatype,
            column2 datatype,
            column3 datatype,
            ....
        );

    ALTER DATABASE // modifica um banco de dados
        ALTER TABLE table_name
        ADD column_name datatype;

    CREATE TABLE // cria uma nova tabela
    ALTER TABLE // modifica uma tabela
    DROP TABLE // apaga uma tabela
    CREATE INDEX // cria um índice (chave de pesquisa)
    DROP INDEX // exclui um índice

## ATRIBUTOS

    WHERE - usado para extrair/filtrar apenas os registros que atendem a uma condição especificada
        SELECT column1, column2, ...FROM table_name WHERE condition;
    
    LIMIT - usada para especificar o número de registros a serem retornados.
        SELECT column_name(s) FROM table_name WHERE condition LIMIT number;

## OPERADORES

    OR, AND E NOT
        SELECT column1, column2, ...FROM table_name WHERE NOT condition1 OR condition2 AND condition3 ...;

    IN - operador é uma abreviação para múltiplas OR condições.

## FUNÇÕES

    MIN() - função retorna o menor valor da coluna selecionada.
        SELECT MIN(column_name) FROM table_name WHERE condition;

    MAX() - função retorna o maior valor da coluna selecionada.
        SELECT MAX(column_name) FROM table_name WHERE condition;
    
    COUNT() - função retorna o número de linhas que correspondem a um critério especificado.
        SELECT COUNT(column_name) FROM table_name WHERE condition;

    AVG() - função retorna o valor médio de uma coluna numérica. 
        SELECT AVG(column_name)FROM table_name WHERE condition;
    
    SUM() - função retorna a soma total de uma coluna numérica.
        SELECT SUM(column_name)FROM table_name WHERE condition;

## RESTRIÇÕES

    NOT NULL- Garante que uma coluna não pode ter um valor NULL
        CREATE TABLE Persons (
            ID int NOT NULL,
            LastName varchar(255) NOT NULL,
            FirstName varchar(255) NOT NULL,
            Age int
        );
    UNIQUE- Garante que todos os valores em uma coluna sejam diferentes
        CREATE TABLE Persons (
            ID int NOT NULL,
            LastName varchar(255) NOT NULL,
            FirstName varchar(255) NOT NULL,
            Age int
            UNIQUE (ID)
        );
    PRIMARY KEY- Uma combinação de a NOT NULL e UNIQUE. Identifica exclusivamente cada linha em uma tabela
        CREATE TABLE Persons (
            ID int NOT NULL,
            LastName varchar(255) NOT NULL,
            FirstName varchar(255) NOT NULL,
            Age int
            PRIMARY KEY (ID)
        );

    FOREIGN KEY - Evita ações que destruiriam links entre tabelas
        CREATE TABLE Orders (
            OrderID int NOT NULL,
            OrderNumber int NOT NULL,
            PersonID int,
            PRIMARY KEY (OrderID),
            FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
        );

    CHECK- Garante que os valores em uma coluna satisfaçam uma condição específica
        CREATE TABLE Persons (
            ID int NOT NULL,
            LastName varchar(255) NOT NULL,
            FirstName varchar(255),
            Age int,
            CHECK (Age>=18)
        );
    DEFAULT- Define um valor padrão para uma coluna se nenhum valor for especificado
        CREATE TABLE Persons (
            ID int NOT NULL,
            LastName varchar(255) NOT NULL,
            FirstName varchar(255),
            Age int,
            City varchar(255) DEFAULT 'Sandnes'
        );
    CREATE INDEX- Usado para criar e recuperar dados do banco de dados muito rapidamente
        CREATE INDEX index_name
            ON table_name (column1, column2, ...);
        CREATE UNIQUE INDEX index_name
            ON table_name (column1, column2, ...);

    

