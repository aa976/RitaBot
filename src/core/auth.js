/*eslint-disable*/
// ------------------------------------------------------------
// Add Your Discord Bot Token here
// Discord Dev > My Apps > Bot > App Bot User > Token > Reveal
// https://discordapp.com/developers/applications/me
// ------------------------------------------------------------

exports.token = process.env.DISCORD_TOKEN;

// ----------------------------------------------------------------------
// Add your Discord Main User ID here
// In Discord, Go to Settings > Appearance > Enable Developer Mode
// Right click your user in channel/message and pick "Copy ID" to obtain
// ----------------------------------------------------------------------

exports.botOwner = '878234759191470101';

// ----------------------------------------------------------------
// Number of shards to spawn in sharding manager (large bots only)
// ----------------------------------------------------------------

exports.shards = 2;

// --------------------
// Invite URL (OAuth2)
// --------------------

exports.invite = 'https://discord.gg/jSGv6ZjKew';

// ----------------------------------------
// Add Webhook info for logging (optional)
// ----------------------------------------

exports.loggerWebhookID = process.env.DISCORD_DEBUG_WEBHOOK_ID;

exports.loggerWebhookToken = process.env.DISCORD_DEBUG_WEBHOOK_TOKEN;

// ---------------------------
// Allow intervals (optional)
// ---------------------------

exports.intervals = false;

// ----------------------------
// Add donation URL (optional)
// ----------------------------

exports.donation = "https://opencollective.com/ritabot-project";

// -------------------------
// Changelog URL (optional)
// -------------------------

exports.changelog = null;

// ---------------
// Developer Mode
// ---------------

exports.dev = process.env.DEBUG;

exports.messagedebug = process.env.MESSAGE_DEBUG;

exports.devID = ['878234759191470101'];
