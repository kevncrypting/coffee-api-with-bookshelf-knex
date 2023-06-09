/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("beans").del();
    await knex("beans").insert([
        {
            name: "Arabica",
            region: "Latin America",
            roastLevel: "Medium",
            price: 10.99,
            description:
                "Arabica is a popular coffee bean known for its sweet and fruity flavors. It is primarily grown in Latin America and is often roasted to a medium level for a balanced taste.",
        },
        {
            name: "Robusta",
            region: "Southeast Asia",
            roastLevel: "Dark",
            price: 7.99,
            description:
                "Robusta is a strong coffee bean variety with a bitter and earthly flavor. Grown in Southeast Asia, it's preferred for its higher caffeine content.",
        },
        {
            name: "Ethiopian Yirgacheffe",
            region: "Africa",
            roastLevel: "Light",
            price: 12.99,
            description:
                "Ethiopian Yirgacheffe is a highly regarded coffee bean from Africa, known for its unique floral, citrus, and wine-like flavors. It is light roasted to preserve its delicate characteristics.",
        },
        {
            name: "Colombian Supremo",
            region: "Colombia",
            roastLevel: "Medium-Dark",
            price: 9.99,
            description:
                "Colombian Supremo is a well-balanced coffee bean with nutty and chocolatey undertones. Cultivated in Colombia, it's roasted to a medium-dark level for a rich flavor.",
        },
        {
            name: "Hawaiian Kona",
            region: "Hawaii",
            roastLevel: "Light",
            price: 22.99,
            description:
                "Hawaiian Kona is a premium coffee bean grown in the volcanic soils of Hawaii. It offers a smooth, mild, and delicate taste, highly sought after by coffee enthusiasts.",
        },
        {
            name: "Guatemalan Antigua",
            region: "Guatemala",
            roastLevel: "Medium",
            price: 11.99,
            description:
                "Guatemalan Antigua is a flavorful coffee bean from Guatemala, known for cocoa, spicy, and fruity notes. It's roasted to a medium level to enhance its complex flavors.",
        },
        {
            name: "Brazilian Santos",
            region: "Brazil",
            roastLevel: "Medium-Dark",
            price: 8.99,
            description:
                "Brazilian Santos is a classic coffee bean from Brazil, offering a nutty flavor and low acidity. It's commonly roasted to a medium-dark level for a rich taste.",
        },
        {
            name: "Costa Rican Tarrazu",
            region: "Costa Rica",
            roastLevel: "Medium",
            price: 13.99,
            description:
                "Costa Rican Tarrazu is a high-quality coffee bean grown in the Tarrazu region of Costa Rica. It boasts a bright, citrusy flavor with hints of chocolate. Roasted to a medium level.",
        },
        {
            name: "Jamaican Blue Mountain",
            region: "Jamaica",
            roastLevel: "Medium",
            price: 35.99,
            description:
                "Jamaican Blue Mountain is a rare and prestigious coffee bean from the Blue Mountains of Jamaica. It has a smooth, well-balanced flavor with subtle hints of spices and nuts. Roasted to a medium level.",
        },
    ]);
};
