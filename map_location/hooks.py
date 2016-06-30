# -*- coding: utf-8 -*-
from __future__ import unicode_literals

app_name = "map_location"
app_title = "Map Location"
app_publisher = "jitendra"
app_description = "location of address on map"
app_icon = "octicon octicon-file-directory"
app_color = "grey"
app_email = "jitendra.k@indictranstech.com"
app_version = "0.0.1"
app_license = "MIT"


app_include_js = "assets/js/leaflet.js"
# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/map_location/css/map_location.css"
# app_include_js = "/assets/map_location/js/map_location.js"

# include js, css files in header of web template
# web_include_css = "/assets/map_location/css/map_location.css"
# web_include_js = "/assets/map_location/js/map_location.js"

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Website user home page (by function)
# get_website_user_home_page = "map_location.utils.get_home_page"

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "map_location.install.before_install"
# after_install = "map_location.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "map_location.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"map_location.tasks.all"
# 	],
# 	"daily": [
# 		"map_location.tasks.daily"
# 	],
# 	"hourly": [
# 		"map_location.tasks.hourly"
# 	],
# 	"weekly": [
# 		"map_location.tasks.weekly"
# 	]
# 	"monthly": [
# 		"map_location.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "map_location.install.before_tests"

# Overriding Whitelisted Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "map_location.event.get_events"
# }

