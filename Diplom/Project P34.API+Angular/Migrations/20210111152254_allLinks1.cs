using Microsoft.EntityFrameworkCore.Migrations;

namespace Project_P34.API_Angular.Migrations
{
    public partial class allLinks1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CartId",
                table: "tblProduct",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "WishListId",
                table: "tblProduct",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "viewProductId",
                table: "tblProduct",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ProductId",
                table: "tblCommentaries",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_tblProduct_CartId",
                table: "tblProduct",
                column: "CartId");

            migrationBuilder.CreateIndex(
                name: "IX_tblProduct_WishListId",
                table: "tblProduct",
                column: "WishListId");

            migrationBuilder.CreateIndex(
                name: "IX_tblProduct_viewProductId",
                table: "tblProduct",
                column: "viewProductId");

            migrationBuilder.CreateIndex(
                name: "IX_tblCommentaries_ProductId",
                table: "tblCommentaries",
                column: "ProductId");

            migrationBuilder.AddForeignKey(
                name: "FK_tblCart_tblUserMoreInfo_Id",
                table: "tblCart",
                column: "Id",
                principalTable: "tblUserMoreInfo",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_tblCommentaries_tblProduct_ProductId",
                table: "tblCommentaries",
                column: "ProductId",
                principalTable: "tblProduct",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_tblProduct_tblCart_CartId",
                table: "tblProduct",
                column: "CartId",
                principalTable: "tblCart",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_tblProduct_tblWishList_WishListId",
                table: "tblProduct",
                column: "WishListId",
                principalTable: "tblWishList",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_tblProduct_tblViewedPorducts_viewProductId",
                table: "tblProduct",
                column: "viewProductId",
                principalTable: "tblViewedPorducts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_tblViewedPorducts_tblUserMoreInfo_Id",
                table: "tblViewedPorducts",
                column: "Id",
                principalTable: "tblUserMoreInfo",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_tblWishList_tblUserMoreInfo_Id",
                table: "tblWishList",
                column: "Id",
                principalTable: "tblUserMoreInfo",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tblCart_tblUserMoreInfo_Id",
                table: "tblCart");

            migrationBuilder.DropForeignKey(
                name: "FK_tblCommentaries_tblProduct_ProductId",
                table: "tblCommentaries");

            migrationBuilder.DropForeignKey(
                name: "FK_tblProduct_tblCart_CartId",
                table: "tblProduct");

            migrationBuilder.DropForeignKey(
                name: "FK_tblProduct_tblWishList_WishListId",
                table: "tblProduct");

            migrationBuilder.DropForeignKey(
                name: "FK_tblProduct_tblViewedPorducts_viewProductId",
                table: "tblProduct");

            migrationBuilder.DropForeignKey(
                name: "FK_tblViewedPorducts_tblUserMoreInfo_Id",
                table: "tblViewedPorducts");

            migrationBuilder.DropForeignKey(
                name: "FK_tblWishList_tblUserMoreInfo_Id",
                table: "tblWishList");

            migrationBuilder.DropIndex(
                name: "IX_tblProduct_CartId",
                table: "tblProduct");

            migrationBuilder.DropIndex(
                name: "IX_tblProduct_WishListId",
                table: "tblProduct");

            migrationBuilder.DropIndex(
                name: "IX_tblProduct_viewProductId",
                table: "tblProduct");

            migrationBuilder.DropIndex(
                name: "IX_tblCommentaries_ProductId",
                table: "tblCommentaries");

            migrationBuilder.DropColumn(
                name: "CartId",
                table: "tblProduct");

            migrationBuilder.DropColumn(
                name: "WishListId",
                table: "tblProduct");

            migrationBuilder.DropColumn(
                name: "viewProductId",
                table: "tblProduct");

            migrationBuilder.DropColumn(
                name: "ProductId",
                table: "tblCommentaries");
        }
    }
}
