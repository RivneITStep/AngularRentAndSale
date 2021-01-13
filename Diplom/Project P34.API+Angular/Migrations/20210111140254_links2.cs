using Microsoft.EntityFrameworkCore.Migrations;

namespace Project_P34.API_Angular.Migrations
{
    public partial class links2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CategoryId",
                table: "tblSubCategory",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SubcategoryId",
                table: "tblProduct",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_tblSubCategory_CategoryId",
                table: "tblSubCategory",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_tblProduct_SubcategoryId",
                table: "tblProduct",
                column: "SubcategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_tblProduct_tblSubCategory_SubcategoryId",
                table: "tblProduct",
                column: "SubcategoryId",
                principalTable: "tblSubCategory",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_tblSubCategory_tblCategory_CategoryId",
                table: "tblSubCategory",
                column: "CategoryId",
                principalTable: "tblCategory",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tblProduct_tblSubCategory_SubcategoryId",
                table: "tblProduct");

            migrationBuilder.DropForeignKey(
                name: "FK_tblSubCategory_tblCategory_CategoryId",
                table: "tblSubCategory");

            migrationBuilder.DropIndex(
                name: "IX_tblSubCategory_CategoryId",
                table: "tblSubCategory");

            migrationBuilder.DropIndex(
                name: "IX_tblProduct_SubcategoryId",
                table: "tblProduct");

            migrationBuilder.DropColumn(
                name: "CategoryId",
                table: "tblSubCategory");

            migrationBuilder.DropColumn(
                name: "SubcategoryId",
                table: "tblProduct");
        }
    }
}
