var jobsForm = new AutoForm(Jobs);

jobsForm.hooks({
	after: {
		insert: function(error, result) {
			if (error) {
				console.log("Insert Error:", error);
			} else {
				//console.log("Insert Result:", result);
				GAnalytics.event("expert","inserte",getUserName(Meteor.user()));

				Router.go('job', {_id:result});
			}
		},
		update: function(error, result) {
			if (error) {
				console.log("Update Error:", error);
			} else {
				//console.log("Update Result:", result);
				GAnalytics.event("job","update",getUserName(Meteor.user()));

				Router.go('job', {_id: Session.get('editingJobId')});
			}
		},
		remove: function(error, result) {
			if (error) {
				console.log("Remove Error:", error);
			} else {
				//console.log("Insert Result:", result);
				GAnalytics.event("job","remove",getUserName(Meteor.user()));

				Router.go('jobs');
			}
		}
	}
});

var baseHelpers = {
	jobsForm:function(){
		return jobsForm;
	}
};

Template.jobNew.helpers(baseHelpers);
Template.jobEdit.helpers(baseHelpers);
Template.jobEmbedLarge.helpers(baseHelpers);
