/*
  初始化DB
*/
package cmd

import (
	"fmt"
	_ "github.com/freecracy/gproject/cmd/database"
	. "github.com/logrusorgru/aurora"
	"github.com/spf13/cobra"
	"log"
	"os"
)

// initCmd represents the init command
var initCmd = &cobra.Command{
	Use:   "init",
	Short: "A brief description of your command",
	Long: `A longer description that spans multiple lines and likely contains examples
and usage of using your command. For example:

Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.`,
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("init called")
		fmt.Println(os.Getenv("HOME"))
		path := "/root/.gproject"
		if _, err := os.Stat(path); os.IsNotExist(err) {
			if err := os.Mkdir(path, 0655); err != nil {
				log.Fatalln(Red(err))
			}
		}
		filename := "/root/.gproject/gproject.db"
		if _, err := os.Stat(filename); os.IsNotExist(err) {
			if _, err := os.Create(filename); err != nil {
				log.Fatalln(Red(err))
			}
		}
		log.Println(Green("db 文件初始化成功"))
	},
}

func init() {
	rootCmd.AddCommand(initCmd)

	// Here you will define your flags and configuration settings.

	// Cobra supports Persistent Flags which will work for this command
	// and all subcommands, e.g.:
	// initCmd.PersistentFlags().String("foo", "", "A help for foo")

	// Cobra supports local flags which will only run when this command
	// is called directly, e.g.:
	// initCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
}
