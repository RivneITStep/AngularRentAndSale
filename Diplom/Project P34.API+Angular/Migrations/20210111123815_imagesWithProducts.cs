using Microsoft.EntityFrameworkCore.Migrations;

namespace Project_P34.API_Angular.Migrations
{
    public partial class imagesWithProducts : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ProductId",
                table: "tblImages",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_tblImages_ProductId",
                table: "tblImages",
                column: "ProductId");

            migrationBuilder.AddForeignKey(
                name: "FK_tblImages_tblProduct_ProductId",
                table: "tblImages",
                column: "ProductId",
                principalTable: "tblProduct",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tblImages_tblProduct_ProductId",
                table: "tblImages");

            migrationBuilder.DropIndex(
                name: "IX_tblImages_ProductId",
                table: "tblImages");

            migrationBuilder.DropColumn(
                name: "ProductId",
                table: "tblImages");
        }
    }
}
