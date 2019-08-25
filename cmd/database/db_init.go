package database

import (
	"database/sql"
	"fmt"
	_ "github.com/mattn/go-sqlite3"
	"log"
)

func init() {
	db, err := sql.Open("sqlite3", "/root/.gproject/gproject.db")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()
	fmt.Println("DBchen")
	sqlStmt := `
       		create table project (id integer not null primary key, name text);
                create table project_ext (id integer not null primary key, name text) ;
                create table stage (id integer not null primary key, name text) ;
                create table stage_ext (id integer not null primary key, name text) ;
                create table user (id integer not null primary key, name text) ;
	`
	_, err = db.Exec(sqlStmt)
	if err != nil {
		log.Printf("%q: %s\n", err, sqlStmt)
		return
	}
}
