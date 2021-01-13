using Microsoft.EntityFrameworkCore.Migrations;

namespace Project_P34.API_Angular.Migrations
{
    public partial class testlinks : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "tblCommentaries",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_tblCommentaries_UserId",
                table: "tblCommentaries",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_tblCommentaries_tblUserMoreInfo_UserId",
                table: "tblCommentaries",
                column: "UserId",
                principalTable: "tblUserMoreInfo",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tblCommentaries_tblUserMoreInfo_UserId",
                table: "tblCommentaries");

            migrationBuilder.DropIndex(
                name: "IX_tblCommentaries_UserId",
                table: "tblCommentaries");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "tblCommentaries");
        }
    }
}
