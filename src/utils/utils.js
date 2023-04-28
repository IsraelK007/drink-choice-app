const baseUrl = "https://api.up2tom.com/v3/models"
const url = "https://api.up2tom.com/v3/decision"
const modelId = "58d3bcf97c6b1644db73ad12";
const token = "Token 9307bfd5fa011428ff198bb37547f979";
const contentType = "application/vnd.api+json";
const headers = {
    "Authorization": token,
    "Content-Type": contentType,
};

module.exports = { baseUrl, url, modelId, token, contentType, headers }